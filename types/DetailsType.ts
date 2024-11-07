type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type CastMember = {
  id: number;
  name: string;
  profile_path: string;
  character: string;
};

export type CrewMember = {
  id: number;
  name: string;
  profile_path: string;
  job: string;
  department: string;
};

export type MovieDetailsType = {
  data: {
    adult: boolean;
    budget: number;
    genres: Genre[];
    id: number;
    origin_country: string[];
    original_language: string;
    overview: string;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    status: string;
    title: string;
    vote_average: number;
  };
  credits: {
    cast: CastMember[];
    crew: CrewMember[];
  };
};

type Creator = {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
};

export type SerieDetailsType = {
  data: {
    created_by: Creator[];
    first_air_date: string;
    genres: Genre[];
    id: number;
    in_production: boolean;
    last_air_date: string;
    name: string;
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    status: string;
    vote_average: number;
  };
  credits: {
    cast: CastMember[];
  };
};
