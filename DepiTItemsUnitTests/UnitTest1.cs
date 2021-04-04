using DepoiTItems;
using NUnit.Framework;
using System.Collections.Generic;

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
            var a = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new List<Item>() { } };
            var b = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new List<Item>() { } };
            var c = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var d = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };

            var resultA = a == b;
            var resultB = c == d;
            var resultC = b == d;
            var resultD = a == null;
            var resultE = null == a;

            Assert.IsTrue(resultA, "Equality operator is not working properly with fully defind field set");
            Assert.IsTrue(resultB, "Equality operator is not working properly with Item == Null");
            Assert.IsFalse(resultC, "Equality operator is not working properly with unequal objects");
            Assert.IsFalse(resultD, "Equality operator is not working properly with unequal objects");
            Assert.IsFalse(resultE, "Equality operator is not working properly with unequal objects");
        }

        [Test]
        public void StorageInEqualityOperators()
        {
            var a = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new List<Item>() { } };
            var b = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var c = new Storage() { Id = 1, Name = "A", NameB = "B", NameC = "C", NameSplitter = "", ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Items = new List<Item>() { } };
            var d = new Storage() { Id = 142, Name = "fwecs", NameSplitter = "xr2e", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            Storage e = null;

            var resultA = a != b;
            var resultB = c != d;
            var resultC = b != d;
            var resultD = a != e;
            var resultE = a != null;
            var resultF = a != null;

            Assert.IsTrue(resultA, "InEquality operator is not working properly");
            Assert.IsTrue(resultB, "InEquality operator is not working properly");
            Assert.IsFalse(resultC, "InEquality operator is not working properly");
            Assert.IsTrue(resultD, "InEquality operator is not working properly");
            Assert.IsTrue(resultE, "InEquality operator is not working properly");
            Assert.IsTrue(resultF, "InEquality operator is not working properly");
        }

        [Test]
        public void DepotEqualityOperators()
        {
            var a = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new List<Storage>() { } };
            var b = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new List<Storage>() { } };
            var c = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var d = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };

            var resultA = a == b;
            var resultB = c == d;
            var resultC = b == d;
            var resultD = a == null;
            var resultE = null == a;

            Assert.IsTrue(resultA, "Equality operator is not working properly with fully defind field set");
            Assert.IsTrue(resultB, "Equality operator is not working properly with Storages == Null");
            Assert.IsFalse(resultC, "Equality operator is not working properly with unequal objects");
            Assert.IsFalse(resultD, "Equality operator is not working properly with unequal objects");
            Assert.IsFalse(resultE, "Equality operator is not working properly with unequal objects");
        }

        [Test]
        public void DepotInEqualityOperators()
        {
            var a = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new List<Storage>() { } };
            var b = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            var c = new Depot() { Id = 1, Name = "A", Owner = new User() { Id = 5, Email = @"e@mail.com", Name = "User", UserToken = @"vkadbv" }, ObjectToken = @"_`iIwJx)mSs9?;6XD{GQqSE@j", Storages = new List<Storage>() { } };
            var d = new Depot() { Id = 142, Name = "fwecs", ObjectToken = @"<UWT4bl*;3bW]KO'!q:gMiq7<" };
            Depot e = null;

            var resultA = a != b;
            var resultB = c != d;
            var resultC = b != d;
            var resultD = a != e;
            var resultE = a != null;
            var resultF = a != null;
            

            Assert.IsTrue(resultA, "InEquality operator is not working properly");
            Assert.IsTrue(resultB, "InEquality operator is not working properly");
            Assert.IsFalse(resultC, "InEquality operator is not working properly");
            Assert.IsTrue(resultD, "InEquality operator is not working properly");
            Assert.IsTrue(resultE, "InEquality operator is not working properly");
            Assert.IsTrue(resultF, "InEquality operator is not working properly");
        }

    }
}