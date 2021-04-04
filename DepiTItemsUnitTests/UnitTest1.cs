using DepoiTItems;
using NUnit.Framework;

namespace DepiTItemsUnitTests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void StorageEqualityOperators()
        {
            var a = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new IItem[] { } };
            var b = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new IItem[] { } };
            var c = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var d = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };

            var resultA = a == b;
            var resultB = c == d;
            var resultC = b == d;

            Assert.IsTrue(resultA, "Equality operator is not working properly with fully defind field set");
            Assert.IsTrue(resultB, "Equality operator is not working properly with Item == Null");
            Assert.IsFalse(resultC, "Equality operator is not working properly with unequal objects");
        }

        [Test]
        public void StorageInEqualityOperators()
        {
            var a = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new IItem[] { } };
            var b = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var c = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new IItem[] { } };
            var d = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };

            var resultA = a != b;
            var resultB = c != d;
            var resultC = b != d;

            Assert.IsTrue(resultA, "InEquality operator is not working properly");
            Assert.IsTrue(resultB, "InEquality operator is not working properly");
            Assert.IsFalse(resultC, "InEquality operator is not working properly");
        }

        [Test]
        public void DepotEqualityOperators()
        {
            var a = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new IStorage[] { } };
            var b = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new IStorage[] { } };
            var c = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var d = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };

            var resultA = a == b;
            var resultB = c == d;
            var resultC = b == d;

            Assert.IsTrue(resultA, "Equality operator is not working properly with fully defind field set");
            Assert.IsTrue(resultB, "Equality operator is not working properly with Storages == Null");
            Assert.IsFalse(resultC, "Equality operator is not working properly with unequal objects");
        }

        [Test]
        public void DepotInEqualityOperators()
        {
            var a = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new IStorage[] { } };
            var b = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var c = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new IStorage[] { } };
            var d = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };

            var resultA = a != b;
            var resultB = c != d;
            var resultC = b != d;

            Assert.IsTrue(resultA, "InEquality operator is not working properly");
            Assert.IsTrue(resultB, "InEquality operator is not working properly");
            Assert.IsFalse(resultC, "InEquality operator is not working properly");
        }

    }
}