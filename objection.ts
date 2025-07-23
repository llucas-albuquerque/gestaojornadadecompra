export interface ObjectionSubcategory {
  title: string;
  objections: string[];
}

export interface ObjectionData {
  title: string;
  subcategories: ObjectionSubcategory[];
}