export const selectToggleSwitch = (state: { theme: { dataTheme: boolean } }) =>
  state.theme.dataTheme;

export const selectNewform = (state: { theme: { newForm: boolean } }) =>
  state.theme.newForm;
