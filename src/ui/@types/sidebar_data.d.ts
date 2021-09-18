export interface SidebarItemData {
  icon: IconType
  label: string
  path: string
}

export type SidebarData = Record<string, SidebarItemData[]>
