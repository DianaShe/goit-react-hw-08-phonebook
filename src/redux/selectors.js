
export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
    const filter = getFilter(state);
    const {items} = getContacts(state);
    if (filter === '') {
      return items;
    } else {
      return items.filter(item =>
        item.name.toLowerCase().includes(filter)
      );
    }
  };

export const getUserMail = state => state.auth.user.email;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getAuthToken = state => state.auth.access_token;
