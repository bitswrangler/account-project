import { ROLES } from "./constants";

// Role checks
export const isAdmin = (user) => user?.role === ROLES.ADMIN;
export const isAccountant = (user) =>
  user?.role === ROLES.ACCOUNTANT || isAdmin(user);
export const isStaff = (user) => user?.role === ROLES.STAFF;

// Feature permissions
export const canEditAccounts = (user) => isAdmin(user);
export const canPostJournal = (user) => isAccountant(user);
export const canViewReports = (user) => isAccountant(user) || isStaff(user);

// Generic permission checker
export const hasPermission = (user, permission) => {
  if (!user) return false;

  const map = {
    EDIT_ACCOUNTS: canEditAccounts,
    POST_JOURNAL: canPostJournal,
    VIEW_REPORTS: canViewReports,
  };

  return map[permission]?.(user) ?? false;
};
