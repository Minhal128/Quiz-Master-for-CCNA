import { use } from "react";
import AdminAnswerKeyClient from "./AdminAnswerKeyClient";

export default function AdminAnswerKeyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return <AdminAnswerKeyClient id={id} />;
}
