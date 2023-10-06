const VIEW_TYPE = "viewItem";

export const getViewType = localStorage.getItem(VIEW_TYPE) | 0;

export const setViewType = (view) => {
    try {
        localStorage.setItem(VIEW_TYPE, view);
    } catch (_) {
    }
  };
