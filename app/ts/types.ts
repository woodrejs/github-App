export type Data = {
  html_url: string;
  owner?: {
    url?: string;
    name?: string;
    created_at?: string;
    avatar_url?: string;
    login?: string;
  };
  url?: string;
  name?: string;
  created_at?: string;
  avatar_url?: string;
  user?: { avatar_url?: string };
  login?: string;
  title?: string;
};
export type Box = HTMLInputElement;
export type Header = { headers: { Accept: string } };
