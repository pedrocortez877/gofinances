export interface HighlightCardProps{
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
};

export interface TypeProps{
  type: 'up' | 'down' | 'total';
};

export const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
};