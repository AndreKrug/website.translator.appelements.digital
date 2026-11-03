import type { Metadata } from "next";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
	title: "Page Not Found",
	description: "This page doesn't exist or has been moved.",
};

export default function NotFound() {
	return <NotFoundContent />;
}
