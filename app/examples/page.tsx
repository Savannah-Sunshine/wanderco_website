"use client";

import React from "react";
import PageHeader from "../components/pageHeader";
import classes from "../ui/examples.module.css";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

type Person = {
    id: string
    firstName: string
    lastName: string
    jobTitle: string
    company: string
    email: string
    phoneNumber: string
    linkedin: string
    personlocation: string
    revenue: number
    industry: string
}

const defaultData: Person[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        jobTitle: 'Engineer',
        company: 'Google',
        email: 'doe@gmail.com',
        phoneNumber: '1234567890',
        linkedin: 'linkedin.com/johndoe',
        personlocation: 'San Francisco, CA',
        revenue: 100,
        industry: 'Tech'
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        jobTitle: 'Designer',
        company: 'Facebook',
        email: 'jane@gmail.com',
        phoneNumber: '1234567890',
        linkedin: 'linkedin.com/janesmith',
        personlocation: 'San Francisco, CA',
        revenue: 1000000,
        industry: 'Tech',
    },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
    columnHelper.accessor('firstName', {
        cell: info => info.getValue(),
        footer: info => info.column.id,
    }),
]

export default function Page() {
    const [data] = React.useState(() => [...defaultData])
    // const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return (
        <div className={classes.examples}>
            <PageHeader />
            <div className={classes.tableTop}>
                <h2>Search</h2>
            </div>
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.id}>
                            {footerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.footer,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    );
}