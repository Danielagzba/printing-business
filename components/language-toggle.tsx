"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2 text-sm">
      <Globe className="h-4 w-4" />
      {t("language.switch")}
    </Button>
  )
}
