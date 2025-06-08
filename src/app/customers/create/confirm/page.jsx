// src/app/customers/create/confirm/page.jsx
"use client";

import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";
import fetchCustomer from "./fetchCustomer";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function ConfirmPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customer_id = searchParams.get("customer_id");
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (!customer_id) return;
    const fetchAndSetCustomer = async () => {
      try {
        const customerData = await fetchCustomer(customer_id);
        setCustomer(customerData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchAndSetCustomer();
  }, [customer_id]);

  return (
    <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
      <div className="alert alert-success p-4 text-center">
        正常に作成しました
      </div>
      {customer ? (
        <OneCustomerInfoCard {...customer} />
      ) : (
        <div className="text-center p-4">読込中...</div>
      )}
      <button onClick={() => router.push("/customers")}>
        <div className="btn btn-primary m-4 text-2xl">戻る</div>
      </button>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div className="p-4">検索パラメータを取得中...</div>}>
      <ConfirmPageInner />
    </Suspense>
  );
}