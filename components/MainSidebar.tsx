"use client";

import {
  Puzzle,
  ChevronDown,
  FileText,
  Home,
  Settings,
  Users,
  Globe,
  LogOut,
  Package,
  MessageCircleQuestion,
} from "lucide-react";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "메인 페이지",
    icon: Home,
    url: "/main",
  },
  {
    title: "회원 관리",
    icon: Users,
    url: "/user-management",
    subItems: [
      { title: "회원 목록", url: "/user-management/list" },
      { title: "블랙리스트", url: "/user-management/blacklist" },
    ],
  },
  {
    title: "상품 관리",
    icon: Package,
    url: "/product-management",
    subItems: [
      { title: "상품 목록", url: "/product-management/all" },
      { title: "공모 상품", url: "/product-management/funding" },
      { title: "조각 상품", url: "/product-management/fragment" },
      { title: "상품 카테고리", url: "/product-management/category" },
    ],
  },
  {
    title: "문의 관리",
    icon: MessageCircleQuestion,
    url: "/inquiry-management",
    subItems: [
      { title: "신고 내역", url: "/inquiry-management/report" },
      { title: "문의 내역", url: "/inquiry-management/inquiry" },
      {
        title: "상품 등록 문의 내역",
        url: "/inquiry-management/product-registration",
      },
    ],
  },
  {
    title: "게시글 관리",
    icon: FileText,
    url: "/notice",
    subItems: [
      { title: "공지사항", url: "/notice/notice" },
      { title: "자주 묻는 질문", url: "/notice/faq" },
      { title: "이벤트", url: "/notice/event" },
    ],
  },
  {
    title: "환경설정",
    icon: Settings,
    url: "/settings",
  },
];
export function MainSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="border-r-0" collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <Puzzle className="h-4 w-4" />
          </div>
          <span className="font-bold text-lg group-data-[collapsible=icon]:hidden">
            Piece of Cake
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent
        className="bg-slate-900 text-slate-100"
        style={{ scrollbarWidth: "none" }}
      >
        <SidebarGroup>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu className="space-y-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`w-full justify-between`}
                          isActive={pathname.includes(item.url)}
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </div>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="space-y-1">
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                className={`${
                                  pathname === subItem.url ? "bg-slate-700" : ""
                                }`}
                              >
                                <Link href={subItem.url}>{subItem.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link
                        href={item.url}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-slate-900 border-t border-slate-700">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-slate-800 text-slate-400 hover:text-slate-100">
              <LogOut className="h-4 w-4" />
              <span>로그아웃</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-slate-800 text-slate-400 hover:text-slate-100">
              <Globe className="h-4 w-4" />
              <span>한국어</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
