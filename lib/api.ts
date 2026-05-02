const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error || `Request failed with status ${res.status}`);
  }

  return json;
}

// ── Inquiry Types ──
export type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "pending" | "resolved";
  createdAt: string;
  updatedAt: string | null;
};

export type CreateInquiryData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type UpdateInquiryStatusData = {
  status: "pending" | "resolved";
};

// ── Inquiry API ──
export const inquiryApi = {
  create: (data: CreateInquiryData) =>
    request<Inquiry>("/api/inquiries", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getAll: () => request<Inquiry[]>("/api/inquiries"),

  updateStatus: (id: string, data: UpdateInquiryStatusData) =>
    request<Inquiry>(`/api/inquiries/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};
