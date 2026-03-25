import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, beforeEach } from 'vitest'
import Roster from './Roster'
import { db } from '../../db/db'

describe('Roster Page', () => {
  beforeEach(async () => {
    await db.brands.clear();
    await db.wrestlers.clear();
    await db.championships.clear();
  });

  it('renders the three brand columns after loading', async () => {
    await db.brands.bulkAdd([
      { name: 'RAW', primaryColor: '#ff0000', secondaryColor: '#000000', logo: 'raw-logo', priority: 1, isMajorBrand: true, isShared: false },
      { name: 'SMACKDOWN', primaryColor: '#0000ff', secondaryColor: '#000000', logo: 'sd-logo', priority: 2, isMajorBrand: true, isShared: false },
      { name: 'NXT', primaryColor: '#ffff00', secondaryColor: '#000000', logo: 'nxt-logo', priority: 3, isMajorBrand: true, isShared: false }
    ]);

    render(
      <MemoryRouter>
        <Roster />
      </MemoryRouter>
    )

    // Check for RAW, SMACKDOWN, NXT (using exact match for alt text)
    await waitFor(() => {
      expect(screen.getByAltText("RAW")).toBeInTheDocument();
      expect(screen.getByAltText("SMACKDOWN")).toBeInTheDocument();
      expect(screen.getByAltText("NXT")).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('renders dummy wrestlers in their columns', async () => {
    const rawId = await db.brands.add({ name: 'RAW', primaryColor: '#ff0000', secondaryColor: '#000000', logo: 'raw-logo', priority: 1, isMajorBrand: true, isShared: false });
    await db.wrestlers.bulkAdd([
      { id: 1, name: 'Seth Rollins', brandId: rawId, gender: 'Male', alignment: 'Face', rating: 90, wins: 0, losses: 0, draws: 0, injuryWeeks: 0, injuryStatus: 'None', matchesSeason: 0, moral: 100, currentTitlesIds: [], historicalTitlesIds: [], isActive: true, contract: 'Full-time' },
      { id: 2, name: 'Cody Rhodes', brandId: rawId, gender: 'Male', alignment: 'Face', rating: 92, wins: 0, losses: 0, draws: 0, injuryWeeks: 0, injuryStatus: 'None', matchesSeason: 0, moral: 100, currentTitlesIds: [], historicalTitlesIds: [], isActive: true, contract: 'Full-time' }
    ]);

    render(
      <MemoryRouter>
        <Roster />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText(/Seth Rollins/i)).toBeInTheDocument();
      expect(screen.getByText(/Cody Rhodes/i)).toBeInTheDocument();
    });
  });

  it('prevents duplicate brands from rendering even if they exist in DB', async () => {
    // Manually inject TWO duplicate brand entries before rendering
    await db.brands.add({ 
      name: 'RAW', 
      primaryColor: '#ff0000', 
      secondaryColor: '#000000', 
      logo: 'fake-logo-1',
      priority: 1,
      isMajorBrand: true,
      isShared: false
    });
    await db.brands.add({ 
      name: 'RAW', 
      primaryColor: '#ff0000', 
      secondaryColor: '#000000', 
      logo: 'fake-logo-2',
      priority: 1,
      isMajorBrand: true,
      isShared: false
    });
    
    render(
      <MemoryRouter>
        <Roster />
      </MemoryRouter>
    )

    await waitFor(() => {
      // Should find exactly 1, but without consolidation it will find 2
      const rawColumns = screen.getAllByAltText("RAW");
      expect(rawColumns).toHaveLength(1);
    }, { timeout: 3000 });
  });
})
