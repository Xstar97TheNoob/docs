const VIEW_TYPE = "viewItem";

export const getViewType = () => {
  // Use logical OR (||) to provide a default value (0 in this case)
  return parseInt(localStorage.getItem(VIEW_TYPE)) || 0;
};

export const setViewType = (view) => {
  try {
    localStorage.setItem(VIEW_TYPE, view);
  } catch (_) {
    // Handle errors if localStorage is not available or the quota is exceeded
  }
};
