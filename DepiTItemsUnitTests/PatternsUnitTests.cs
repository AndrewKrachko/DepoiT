using DepoiTItems;
using NUnit.Framework;

namespace DepiTItemsUnitTests
{
    public class PatternsUnitTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void NumberPatternWoParametersTest()
        {
            var item = new NumberPattern();

            Assert.IsTrue(item.FieldType == FieldTypeEnum.Number);
        }

        [Test]
        public void NumberSetPatternWoParametersTest()
        {
            var item = new NumberSetPattern();

            Assert.IsTrue(item.FieldType == FieldTypeEnum.NumberFromSet);
        }

        [Test]
        public void NumberWithSingleTolerancePatternWoParametersTest()
        {
            var item = new NumberWithSingleTolerancePattern();

            Assert.IsTrue(item.FieldType == FieldTypeEnum.NumberWithTolerance);
        }

        [Test]
        public void NumberWithDifferentialTolerancePatternWoParametersTest()
        {
            var item = new NumberWithDifferentialTolerancePattern();

            Assert.IsTrue(item.FieldType == FieldTypeEnum.NumberWithDifferentialTolerance);
        }

        [Test]
        public void StringPatternWoParametersTest()
        {
            var item = new StringPattern();

            Assert.IsTrue(item.FieldType == FieldTypeEnum.StringValue);
        }

        [Test]
        public void StringSetPatternWoParametersTest()
        {
            var item = new StringSetPattern();

            Assert.IsTrue(item.FieldType == FieldTypeEnum.StringValueFromSet);
        }
    }
}
