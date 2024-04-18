'use client'

import { NextPage } from "next";
import { NextUIProvider as NextUIProviderOrigin } from "@nextui-org/react";

interface Props {
	children: React.ReactNode;
}

const NextUIProvider: NextPage<Props> = ({ children }) => {
	return <NextUIProviderOrigin>{children}</NextUIProviderOrigin>;
};

export default NextUIProvider;
