/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  UserVault,
  UserVault_AutoSyncTriggered,
  UserVault_BalanceSynced,
  UserVault_OwnershipTransferred,
  UserVault_TokenAdded,
  UserVault_TokenRemoved,
  UserVault_TokensReceived,
  UserVault_TokensWithdrawn,
  VaultFactory,
  VaultFactory_OwnershipTransferred,
  VaultFactory_VaultCreated,
  VaultFactory_VaultRemoved,
} from "generated";

// Register UserVault contracts dynamically when created by factory
VaultFactory.VaultCreated.contractRegister(({ event, context }) => {
  context.addUserVault(event.params.vault);
});

UserVault.AutoSyncTriggered.handler(async ({ event, context }) => {
  const entity: UserVault_AutoSyncTriggered = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    timestamp: event.params.timestamp,
  };

  context.UserVault_AutoSyncTriggered.set(entity);
});

UserVault.BalanceSynced.handler(async ({ event, context }) => {
  const entity: UserVault_BalanceSynced = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    oldBalance: event.params.oldBalance,
    newBalance: event.params.newBalance,
    timestamp: event.params.timestamp,
  };

  context.UserVault_BalanceSynced.set(entity);
});

UserVault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: UserVault_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.UserVault_OwnershipTransferred.set(entity);
});

UserVault.TokenAdded.handler(async ({ event, context }) => {
  const entity: UserVault_TokenAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    timestamp: event.params.timestamp,
  };

  context.UserVault_TokenAdded.set(entity);
});

UserVault.TokenRemoved.handler(async ({ event, context }) => {
  const entity: UserVault_TokenRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    timestamp: event.params.timestamp,
  };

  context.UserVault_TokenRemoved.set(entity);
});

UserVault.TokensReceived.handler(async ({ event, context }) => {
  const entity: UserVault_TokensReceived = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    amount: event.params.amount,
    from: event.params.from,
    timestamp: event.params.timestamp,
  };

  context.UserVault_TokensReceived.set(entity);
});

UserVault.TokensWithdrawn.handler(async ({ event, context }) => {
  const entity: UserVault_TokensWithdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    amount: event.params.amount,
    to: event.params.to,
    timestamp: event.params.timestamp,
  };

  context.UserVault_TokensWithdrawn.set(entity);
});

VaultFactory.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: VaultFactory_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.VaultFactory_OwnershipTransferred.set(entity);
});

VaultFactory.VaultCreated.handler(async ({ event, context }) => {
  const entity: VaultFactory_VaultCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    vault: event.params.vault,
    timestamp: event.params.timestamp,
  };

  context.VaultFactory_VaultCreated.set(entity);
});

VaultFactory.VaultRemoved.handler(async ({ event, context }) => {
  const entity: VaultFactory_VaultRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    vault: event.params.vault,
  };

  context.VaultFactory_VaultRemoved.set(entity);
});
