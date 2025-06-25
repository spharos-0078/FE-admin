"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tabs = [
  { id: "storage", label: "상품 목록", active: false },
  { id: "public", label: "공모 상품", active: true },
  { id: "fragment", label: "조각 상품", active: false },
  { id: "category", label: "상품 카테고리", active: false },
];

const products = [
  {
    id: 1,
    category: "대분류 > 소분류",
    name: "상품이름 입니다",
    purchasePrice: "240,000 원",
    publicPrice: "340,000 원",
    estimatedPrice: "640,000 원",
    modifiedDate: "2024-07-18",
  },
  {
    id: 2,
    category: "대분류 > 소분류",
    name: "상품이름 입니다",
    purchasePrice: "240,000 원",
    publicPrice: "340,000 원",
    estimatedPrice: "640,000 원",
    modifiedDate: "2024-07-18",
  },
  {
    id: 3,
    category: "대분류 > 소분류",
    name: "상품이름 입니다",
    purchasePrice: "240,000 원",
    publicPrice: "340,000 원",
    estimatedPrice: "640,000 원",
    modifiedDate: "2024-07-18",
  },
  {
    id: 4,
    category: "대분류 > 소분류",
    name: "상품이름 입니다",
    purchasePrice: "240,000 원",
    publicPrice: "340,000 원",
    estimatedPrice: "640,000 원",
    modifiedDate: "2024-07-18",
  },
  {
    id: 5,
    category: "대분류 > 소분류",
    name: "상품이름 입니다",
    purchasePrice: "240,000 원",
    publicPrice: "340,000 원",
    estimatedPrice: "640,000 원",
    modifiedDate: "2024-07-18",
  },
];

export function ProductManagement() {
  return (
    <div className="flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="text-sm text-gray-600">상품 관리 &gt; 공모상품관리</div>
      </header>

      <div className="flex-1 p-6">
        {/* Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  tab.active
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" className="bg-gray-100">
                  대분류 선택
                </Button>
                <Button variant="outline" className="bg-gray-100">
                  소분류 선택
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="상품 이름 검색" className="pl-10 w-64" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">번호</TableHead>
                  <TableHead>카테고리</TableHead>
                  <TableHead>상품명</TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      매입가
                      <div className="flex flex-col">
                        <ChevronUp className="h-3 w-3" />
                        <ChevronDown className="h-3 w-3" />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      공모가
                      <div className="flex flex-col">
                        <ChevronUp className="h-3 w-3" />
                        <ChevronDown className="h-3 w-3" />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      AI 예상가
                      <div className="flex flex-col">
                        <ChevronUp className="h-3 w-3" />
                        <ChevronDown className="h-3 w-3" />
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      수정 일자
                      <div className="flex flex-col">
                        <ChevronUp className="h-3 w-3" />
                        <ChevronDown className="h-3 w-3" />
                      </div>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="text-center">{product.id}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell className="text-center">
                      {product.purchasePrice}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.publicPrice}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.estimatedPrice}
                    </TableCell>
                    <TableCell className="text-center">
                      {product.modifiedDate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button variant="ghost" size="sm">
                &lt; 이전
              </Button>
              <Button variant="default" size="sm" className="bg-blue-500">
                1
              </Button>
              <Button variant="ghost" size="sm">
                다음 &gt;
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
