export interface NavigationItem {
  route: string;
  label: string;
  children?: NavigationItem[];
}
