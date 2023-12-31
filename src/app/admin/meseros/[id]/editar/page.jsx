"use client";
import Load from "@/components/Load";
import {useEffect, useState} from 'react'
import Page from "@/app/admin/meseros/registro/page";
import { useGetSearchByIdColaboradorQuery } from "@/redux/services/meseroApi";
export default function PageEditMesero({ params }) {
  const  { data, isLoading, refetch } = useGetSearchByIdColaboradorQuery(params?.id);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Load />
      ) : !isLoading && !Array.isArray(data?.data) ? (
        <Page data={data} isUpdate={true} param={params?.id} />
      ) : (
        <div className="flex w-full h-full justify-center items-center">
          <h1 className="font-extrabold text-zinc-400">No encontrado</h1>
        </div>
      )}
    </div>
  );
}
