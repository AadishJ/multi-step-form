'use client';

import { FormStep } from "./components/FormStep";
import { Sidebar } from "./components/Sidebar";
import { FormProvider } from "./contexts/form";
import { FormStepProvider } from "./contexts/form-step";

export default function Home() {
  return (
    <FormStepProvider>
      <FormProvider>
        <main className="
          flex flex-col h-screen m-0
          sm:flex-col sm:m-4 sm:h-auto"
        >
          {/* Sidebar appears on top */}
          <Sidebar />
          
          {/* Form appears below the sidebar */}
          <div className="flex flex-1 sm:max-w-[550px] sm:flex-0 sm:mx-auto mt-4">
            <FormStep />
          </div>
        </main>
      </FormProvider>
    </FormStepProvider>
  );
}
