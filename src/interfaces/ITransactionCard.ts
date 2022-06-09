export interface Category{
  name: string;
  icon: string;
}

export interface Data{
  title: string;
  amount: string;
  category: Category;
  date: string;
};

export interface Props{
  data: Data;
}