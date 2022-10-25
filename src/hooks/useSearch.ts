import { useState, useEffect } from "react";

export const useSearch = (users = []) => {
  const [searchName, setSearchName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchProfiles, setSearchProfiles] = useState<number>();
  const [searchStates, setSearchStates] = useState<number>();

  const handleChangeName = (e: any) => {
    setSearchName(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setSearchEmail(e.target.value);
  };

  const handleChangeProfiles = (e: any) => {
    const profile = parseInt(e.target.value);
    setSearchProfiles(profile);
  };

  const handleChangeStates = (e: any) => {
    const state = parseInt(e.target.value);
    setSearchStates(state);
  };

  const getFilterValue = () => {
    let filtered = users;

    if (searchName) {
      filtered = filtered.filter((user: any) =>
        user.name.toLowerCase().includes(searchName)
      );
    }

    if (searchEmail) {
      filtered = filtered.filter((user: any) =>
        user.email.toLowerCase().includes(searchEmail)
      );
    }

    if (searchProfiles) {
      filtered = filtered.filter(
        (user: any) => user.profile === searchProfiles
      );
    }

    if (searchStates) {
      filtered = filtered.filter((user: any) => user.state === searchStates);
    }

    return filtered;
  };

  const userFiltered = getFilterValue();

  return {
    searchName,
    searchEmail,
    searchProfiles,
    searchStates,
    userFiltered,
    handleChangeName,
    handleChangeEmail,
    handleChangeProfiles,
    handleChangeStates,
  };
};
