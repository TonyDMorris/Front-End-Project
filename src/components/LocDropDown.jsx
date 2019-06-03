import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Select, InputLabel } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const LocDropDown = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("English");
  const langObj = { en: "English", es: "Spanish" };
  return (
    <FormControl>
      <InputLabel>{t("current-language")}</InputLabel>
      <Select
        value={"lang"}
        onChange={e => {
          i18n.changeLanguage(e.target.value);
          setLang(langObj[e.target.value]);
        }}
      >
        <MenuItem value={"en"}>{t("English-lang")}</MenuItem>
        <MenuItem value={"es"}>{t("Spanish-lang")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LocDropDown;
