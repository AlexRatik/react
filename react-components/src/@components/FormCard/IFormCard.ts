export interface IFormCard {
  card: {
    name: string;
    surname: string;
    number: string;
    birthday: string;
    country: string;
    sex: string;
    pictureURL: string;
    gifts: string;
  };
}

export interface IFormValues {
  file: FileList;
  name: string;
  surname: string;
  number: string;
  birthday: string;
  country: string;
  switcher: string;
  book: boolean;
  dailyPlanner: boolean;
  pen: boolean;
  pencil: boolean;
  notebook: boolean;
}
