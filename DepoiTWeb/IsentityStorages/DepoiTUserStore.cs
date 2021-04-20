using DepoiTItems;
using Logger;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace DepoiTWeb
{
    public class DepoiTUserStore : IUserStore<User>,
        IUserPasswordStore<User>
    {
        private readonly ICore _core;
        private readonly ILogger _logger;

        public DepoiTUserStore(ICore core, ILogger logger)
        {
            _core = core;
            _logger = logger;
        }

        public Task<IdentityResult> CreateAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user is null) throw new ArgumentNullException(nameof(user));

            return Task<IdentityResult>.Factory.StartNew(() =>
            {
                if (_core.SetUser(user))
                {
                    return IdentityResult.Success;
                }
                return IdentityResult.Failed(new IdentityError { Description = $"Could not create user {user.Name}." });
            });
        }

        public Task<IdentityResult> DeleteAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user is null) throw new ArgumentNullException(nameof(user));

            return Task<IdentityResult>.Factory.StartNew(() =>
            {
                if (_core.DropUser(user.Id))
                {
                    return IdentityResult.Success;
                }
                return IdentityResult.Failed(new IdentityError { Description = $"Could not delete user {user.Name}." });
            });
        }

        public void Dispose()
        {
        }

        public Task<User> FindByIdAsync(string userIdString, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            var userId = 0;
            if (userIdString is null && !int.TryParse(userIdString, out userId)) throw new ArgumentNullException(nameof(userIdString));

            return Task<User>.Factory.StartNew(() =>
            {
                if (_core.GetUser(userId, out var user))
                {
                    return user;
                }
                throw new ArgumentException($"Could not find user with id {userId}.");
            });
        }

        public Task<User> FindByNameAsync(string normalizedUserName, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (string.IsNullOrEmpty(normalizedUserName)) throw new ArgumentNullException(nameof(normalizedUserName));

            return Task<User>.Factory.StartNew(() =>
            {
                if (_core.GetUserByNameOrEmail(normalizedUserName, out var user))
                {
                    return user;
                }
                throw new ArgumentException($"Could not find user {normalizedUserName}.");
            });
        }

        public Task<string> GetNormalizedUserNameAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            throw new NotImplementedException();
        }

        public Task<string> GetPasswordHashAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null) throw new ArgumentNullException(nameof(user));

            return Task.FromResult(user.PasswordHash);
        }

        public Task<string> GetUserIdAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null) throw new ArgumentNullException(nameof(user));

            return Task.FromResult(user.Id.ToString());
        }

        public Task<string> GetUserNameAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null) throw new ArgumentNullException(nameof(user));

            return Task.FromResult(user.Name);
        }

        public Task<bool> HasPasswordAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            throw new NotImplementedException();
        }

        public Task SetNormalizedUserNameAsync(User user, string normalizedName, CancellationToken cancellationToken = default(CancellationToken))
        {
            throw new NotImplementedException();
        }

        public Task SetPasswordHashAsync(User user, string passwordHash, CancellationToken cancellationToken = default(CancellationToken))
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null) throw new ArgumentNullException(nameof(user));
            if (passwordHash == null) throw new ArgumentNullException(nameof(passwordHash));

            user.PasswordHash = passwordHash;
            if (!_core.UpdateUser(user, out var _))
            {
                throw new ArgumentException($"Could not update user {user.Name} password.");
            }
            return Task.FromResult<object>(null);
        }

        public Task SetUserNameAsync(User user, string userName, CancellationToken cancellationToken = default(CancellationToken))
        {
            throw new NotImplementedException();
        }

        public Task<IdentityResult> UpdateAsync(User user, CancellationToken cancellationToken = default(CancellationToken))
        {
            throw new NotImplementedException();
        }
    }
}
