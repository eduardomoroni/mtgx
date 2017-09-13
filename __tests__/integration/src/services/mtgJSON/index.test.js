import { connectDatabase, closeDatabase } from '../../configuration/realm'
import { importAllSets } from '../../../../../src/services/mtgJSON'
import AllSets from '../../../../../src/assets/cards/AllSets-x.json'

xdescribe('MTG JSON Service', () => {
  beforeAll(() => {
    connectDatabase()
  })

  afterAll(() => {
    closeDatabase()
  })

  const allSets = [
    'UNH', 'UGL', 'pWOS', 'pWOR', 'pWCQ', 'pSUS', 'pSUM', 'pREL', 'pPRO',
    'pPRE', 'pPOD', 'pMPR', 'pMGD', 'pMEI', 'pLPA', 'pLGM', 'pJGP', 'pHHO',
    'pWPN', 'pGTW', 'pGRU', 'pGPX', 'pFNM', 'pELP', 'pDRC', 'pCMP', 'pCEL',
    'pARL', 'pALP', 'p2HG', 'p15A', 'PD3', 'PD2', 'H09', 'PTK', 'POR', 'PO2',
    'PCA', 'PC2', 'HOP', 'VMA', 'MMA', 'MM3', 'MM2', 'MED', 'ME4', 'ME3', 'ME2',
    'EMA', 'MPS_AKH', 'MPS', 'EXP', 'V16', 'V15', 'V14', 'V13', 'V12', 'V11', 'V10',
    'V09', 'DRB', 'EVG', 'DDS', 'DDR', 'DDQ', 'DDP', 'DDO', 'DDN', 'DDM', 'DDL', 'DDK',
    'DDJ', 'DDI', 'DDH', 'DDG', 'DDF', 'DDE', 'DDD', 'DDC', 'DD3_JVC', 'DD3_GVL', 'DD3_EVG',
    'DD3_DVD', 'DD2', 'CNS', 'CN2', 'CMD', 'CMA', 'CM1', 'C17', 'C16', 'C15', 'C14', 'C13', 'CEI',
    'CED', 'E01', 'ARC', 'ZEN', 'WWK', 'WTH', 'W17', 'W16', 'VIS', 'VAN', 'USG', 'ULG', 'UDS', 'TSP',
    'TSB', 'TPR', 'TOR', 'TMP', 'THS', 'STH', 'SOM', 'SOK', 'SOI', 'SHM', 'SCG', 'S99', 'S00', 'RTR',
    'RQS', 'ROE', 'RAV', 'PLS', 'PLC', 'PCY', 'ORI', 'ONS', 'OGW', 'ODY', 'NPH', 'NMS', 'MRD', 'MOR',
    'MMQ', 'MIR', 'MGB', 'MD1', 'MBS', 'M15', 'M14', 'M13', 'M12', 'M11', 'M10', 'LRW', 'LGN', 'LEG',
    'LEB', 'LEA', 'KTK', 'KLD', 'JUD', 'JOU', 'ITP', 'ISD', 'INV', 'ICE', 'HOU', 'HML', 'GTC', 'GPT',
    'FUT', 'FRF_UGIN', 'FRF', 'FEM', 'EXO', 'EVE', 'EMN', 'DTK', 'DST', 'DRK', 'DPA', 'DKM', 'DKA',
    'DIS', 'DGM', 'CST', 'CSP', 'CP3', 'CP2', 'CP1', 'CON', 'CHR', 'CHK', 'BTD', 'BRB', 'BOK',
    'BNG', 'BFZ', 'AVR', 'ATQ', 'ATH', 'ARN', 'ARB', 'APC', 'ALL', 'ALA', 'AKH', 'AER', '9ED',
    '8ED', '7ED', '6ED', '5ED', '5DN', '4ED', '3ED', '2ED', '10E'
  ]

  it('should import all sets to realm database', () => {
    const sets = importAllSets(AllSets)
    expect(sets).toEqual(allSets)
    expect(sets).toHaveLength(213)
  })
})
