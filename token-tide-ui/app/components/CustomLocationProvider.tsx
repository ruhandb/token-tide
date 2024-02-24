"use client"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ptBR as ptBrDatePicker } from '@mui/x-date-pickers/locales';

export default function CustomLocationProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {    

  return (
    <LocalizationProvider localeText={ptBrDatePicker.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}