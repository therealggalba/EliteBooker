import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { sendFeedbackToDiscord, type FeedbackData } from '../../utils/feedbackService';
import styles from './FeedbackModal.module.scss';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const { t } = useTranslation();
  const [type, setType] = useState<FeedbackData['type']>('Bug');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape & Focus Isolation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Set initial focus
    const focusable = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    (focusable?.[0] as HTMLElement)?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const feedback: FeedbackData = {
        type,
        username: username.trim() || undefined,
        message,
        timestamp: new Date().toLocaleString(),
        browserInfo: `${navigator.userAgent} | Lang: ${navigator.language}`,
      };

      await sendFeedbackToDiscord(feedback);
      setStatus('success');
      setMessage('');
      setUsername('');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2500);
    } catch (err: unknown) {
      console.error('Feedback submission failed:', err);
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className={styles.overlay} 
      onClick={onClose}
      role="presentation"
    >
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
      >
        <header className={styles.header}>
          <h2 id="feedback-title">{t('feedback.title')}</h2>
          <button 
            className={styles.closeBtn} 
            onClick={onClose}
            aria-label={t('common.close', 'Cerrar')}
          >
            &times;
          </button>
        </header>

        {status === 'success' ? (
          <div className={styles.success} role="alert">
            <p>{t('feedback.success_msg')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="feedback-type">{t('feedback.type_label')}</label>
              <select 
                id="feedback-type" 
                value={type} 
                onChange={(e) => setType(e.target.value as FeedbackData['type'])}
                className={styles.select}
                required
              >
                <option value="Bug">{t('feedback.type_bug')}</option>
                <option value="Suggestion">{t('feedback.type_suggestion')}</option>
                <option value="Praise">{t('feedback.type_praise')}</option>
                <option value="Other">{t('feedback.type_other')}</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="feedback-username">{t('feedback.username_label')}</label>
              <input
                id="feedback-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t('feedback.username_placeholder')}
                className={styles.input}
                maxLength={100}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="feedback-message">{t('feedback.message_label')}</label>
              <textarea
                id="feedback-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('feedback.message_placeholder')}
                required
                className={styles.textarea}
                maxLength={2000}
              />
            </div>

            {status === 'error' && (
              <p className={styles.error} role="alert">
                {t('feedback.error_msg')} {errorMessage}
              </p>
            )}

            <div className={styles.actions}>
              <button 
                type="button" 
                onClick={onClose} 
                className={styles.cancelBtn}
              >
                {t('common.cancel')}
              </button>
              <button 
                type="submit" 
                disabled={isSubmitting || !message.trim()} 
                className={styles.submitBtn}
                aria-live="polite"
              >
                {isSubmitting ? t('Sending') : t('Send')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
