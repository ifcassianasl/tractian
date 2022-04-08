export interface assetsProps {
  id: number;
  sensors: string[];
  status: "inAlert" | "inOperation" | "inDowntime";
  healthscore: number;
  model: string;
  name: string;
  image: string;
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  specifications: {
    maxTemp?: number;
    power?: number;
    rpm?: number;
  };
  unitId: number;
  companyId: number;
}

export interface companyProps {
  name: string;
  id: number;
}
