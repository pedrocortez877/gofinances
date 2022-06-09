export interface Category{
  name: string;
  icon: string;
}

export interface TransactionTypeProps{
  type: 'positive' | 'negative';
}

export interface Data extends TransactionTypeProps{
  title: string;
  amount: string;
  category: Category;
  date: string;
};

export interface Props{
  data: Data;
}