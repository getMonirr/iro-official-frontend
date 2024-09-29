export interface IBook {
  id: string;
  category: string;
  title: string;
  author: string;
  description: string;
  genre?: string;
  publicationDate: string;
  ISBN?: string;
  availableCopies?: number;
  language: string;
  coverImageUrl: string;
  pdfPreview?: IPDFPreview;
  ratings: IRating;
  pages: number;
  publisher: string;
  library?: string;
  availability: IAvailability;
  edition: string;
}

interface IPDFPreview {
  url: string;
  availablePages: number;
  totalPages: number;
}

interface IRating {
  averageRating: number;
  numberOfRatings: number;
}

interface IAvailability {
  isAvailable: boolean;
  totalCopies: number;
  availableCopies: number;
}
