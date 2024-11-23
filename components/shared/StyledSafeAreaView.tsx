import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const StyledSafeAreaView = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeAreaView
      className={`flex h-full items-center justify-between bg-white ${className}`}
    >
      {children}
    </SafeAreaView>
  );
};

export default StyledSafeAreaView;
