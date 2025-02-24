// components/algorithms/ProblemsTable.tsx
"use client"

import React, { useState } from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SolutionModal } from "@/components/blog/algorithms/SolutionModal"
import { useLanguage } from "@/components/LanguageProvider"
import {LeetCodeProblem} from "@/lib/types";

export function ProblemsTable({ data }: { data: LeetCodeProblem[] }) {
    const { language } = useLanguage()
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [selectedProblem, setSelectedProblem] = useState<LeetCodeProblem | null>(null)

    const columns: ColumnDef<LeetCodeProblem>[] = [
        {
            accessorKey: "number",
            header: language === "ko" ? "번호" : "Number",
            cell: ({ row }) => <div className="w-16">{row.getValue("number")}</div>,
        },
        {
            accessorKey: "name",
            header: language === "ko" ? "문제" : "Problem",
        },
        {
            accessorKey: "difficulty",
            header: language === "ko" ? "난이도" : "Difficulty",
            cell: ({ row }) => {
                const difficulty = row.getValue("difficulty") as string
                return (
                    <Badge
                        variant="outline"
                        className={cn(
                            "w-16 justify-center",
                            difficulty === "Easy" && "border-green-500 text-green-500",
                            difficulty === "Medium" && "border-yellow-500 text-yellow-500",
                            difficulty === "Hard" && "border-red-500 text-red-500",
                        )}
                    >
                        {difficulty}
                    </Badge>
                )
            },
        },
        {
            accessorKey: "tags",
            header: language === "ko" ? "태그" : "Tags",
            cell: ({ row }) => {
                const tags = row.getValue("tags") as string[]
                return (
                    <div className="flex flex-wrap gap-1">
                        {tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )
            },
        },
        {
            accessorKey: "approach",
            header: language === "ko" ? "접근 방법" : "Approach",
        },
        {
            accessorKey: "date",
            header: language === "ko" ? "날짜" : "Solved at",
        },
        {
            accessorKey: "url",
            header: "Link",
            cell: ({ row }) => {
                const url = row.getValue("url") as string
                return (
                    <Link
                        href={url}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center hover:text-primary"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </Link>
                )
            },
        },
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <>
            <div className="flex items-center py-4">
                <Input
                    placeholder={language === "ko" ? "문제 이름으로 검색..." : "Search by problem name..."}
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => setSelectedProblem(row.original)}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    {language === "ko" ? "결과가 없습니다." : "No results."}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Modal */}
            {selectedProblem && (
                <SolutionModal
                    isOpen={!!selectedProblem}
                    onClose={() => setSelectedProblem(null)}
                    problem={selectedProblem}
                />
            )}
        </>
    )
}
