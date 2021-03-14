using DepoiTItems;
using System;

namespace DepoiTRepository
{
    public class Repository : IRepository
    {
        private IDataStorage _dataStorge;

        public bool GetUserByName(string name, out IUser user)
        {
            try
            {
                user = _dataStorge.GetUserByName(name);

                if (user != null)
                {
                    return true;
                }

                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
