export const selectIsUserAuthorized = state => Boolean(state.auth.accessToken);
export const selectAuthIsLoading = state => state.auth.isLoading;
