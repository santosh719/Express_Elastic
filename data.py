data = {
    "data": [{
        "type": "question",
        "text": "I was presented with this question in an end of module open book exam today and found myself lost. i was reading Head first Javaand both definitions seemed to be exactly the same. i was just wondering what the MAIN difference was for my own piece of mind. i know there are a number of similar questions to this but, none i have seen which provide a definitive answer.Thanks, Darren",
        "tags": ["Javaand", "number", "module", "Head", "question", "book", "today", "difference", "piece", "Darren", "none", "MAIN"]
    }, {
        "type": "answer accepted-answer",
        "text": " Inheritance is when a 'class' derives from an existing 'class'.So if you have a Person class, then you have a Student class that extends Person, Student inherits all the things that Person has.There are some details around the access modifiers you put on the fields/methods in Person, but that's the basic idea.For example, if you have a private field on Person, Student won't see it because its private, and private fields are not visible to subclasses.Polymorphism deals with how the program decides which methods it should use, depending on what type of thing it has.If you have a Person, which has a read method, and you have a Student which extends Person, which has its own implementation of read, which method gets called is determined for you by the runtime, depending if you have a Person or a Student.It gets a bit tricky, but if you do something likePerson p = new Student();p.read();the read method on Student gets called.Thats the polymorphism in action.You can do that assignment because a Student is a Person, but the runtime is smart enough to know that the actual type of p is Student.Note that details differ among languages.You can do inheritance in javascript for example, but its completely different than the way it works in Java.",
        "tags": ["implementation", "program", "read", "Student.Note", "Inheritance", "access", "method", "action.You", "example", "thing", "runtime", "Student.It", "idea.For", "Java", "use", "way", "type", "Person", "something", "field", "likePerson", "Student", "subclasses.Polymorphism", "class", "polymorphism", "inheritance", "languages.You"]
    }, {
        "type": "answer",
        "text": "Polymorphism: The ability to treat objects of different types in a similar manner.Example: Giraffe and Crocodile are both Animals, and animals can Move.If you have an instance of an Animal then you can call Move without knowing or caring what type of animal it is.Inheritance: This is one way of achieving both Polymorphism and code reuse at the same time.Other forms of polymorphism:There are other way of achieving polymorphism, such as interfaces, which provide only polymorphism but no code reuse (sometimes the code is quite different, such as Move for a Snake would be quite different from Move for a Dog, in which case an Interface would be the better polymorphic choice in this case.In other dynamic languages polymorphism can be achieved with Duck Typing, which is the classes don't even need to share the same base class or interface, they just need a method with the same name.Or even more dynamic like Javascript, you don't even need classes at all, just an object with the same method name can be used polymorphically.",
        "tags": ["code", "manner.Example", "animal", "Javascript", "Snake", "reuse", "name.Or", "choice", "Interface", "name", "Move", "Typing", "is.Inheritance", "method", "ability", "Crocodile", "base", "Animal", "caring", "way", "Move.If", "case.In", "case", "Duck", "Polymorphism", "share", "instance", "Dog", "class", "polymorphism"]
    }, {
        "type": "question",
        "text": "I found out that the above piece of code is perfectly legal in Java. I have the following questions. ThanksAdded one more question regarding Abstract method classes. public class TestClass{public static void main(String[] args) {TestClass t = new TestClass();}private static void testMethod(){abstract class TestMethod{int a;int b;int c;abstract void implementMe();}class DummyClass extends TestMethod{void implementMe(){}}DummyClass dummy = new DummyClass();}}",
        "tags": ["code", "Java", "DummyClass", "int", "TestClass", "implementMe", "static", "String", "question", "args", "class", "dummy", "TestMethod", "Abstract", "piece"]
    }, {
        "type": "question",
        "text": "In java it's a bit difficult to implement a deep object copy function. What steps you take to ensure the original object and the cloned one share no reference? ",
        "tags": ["reference", "share", "java", "function", "object"]
    }, {
        "type": "answer",
        "text": "You can make a deep copy serialization without creating some files. Copy: Restore: ByteArrayOutputStream bos = new ByteArrayOutputStream();ObjectOutputStream oos = new ObjectOutputStream(bos);oos.writeObject(object);oos.flush();oos.close();bos.close();byte[] byteData = bos.toByteArray();; ByteArrayInputStream bais = new ByteArrayInputStream(byteData);(Object) object = (Object) new ObjectInputStream(bais).readObject();",
        "tags": ["bais", "ObjectOutputStream", "ObjectInputStream", "bos.toByteArray", "deep", "Object", "Copy", "ByteArrayInputStream", "oos", "ByteArrayOutputStream", "serialization", "byte", "copy", "Restore", "byteData", "bos", ".readObject"]
    }, {
        "type": "answer",
        "text": "Java has the ability to create classes at runtime. These classes are known as Synthetic Classes or Dynamic Proxies. See for more information. Other open-source libraries, such as and also allow you to generate synthetic classes, and are more powerful than the libraries provided with the JRE. Synthetic classes are used by AOP (Aspect Oriented Programming) libraries such as Spring AOP and AspectJ, as well as ORM libraries such as Hibernate.",
        "tags": ["Java", "Oriented", "AspectJ", "information", "Hibernate", "ORM", "Aspect", "AOP", "Proxies", "ability", "Programming", "JRE", "open-source", "Spring", "Dynamic", "See", "runtime"]
    }, {
        "type": "answer accepted-answer",
        "text": "A safe way is to serialize the object, then deserialize.This ensures everything is a brand new reference.about how to do this efficiently. Caveats: It's possible for classes to override serialization such that new instances are created, e.g. for singletons.Also this of course doesn't work if your classes aren't Serializable.",
        "tags": ["work", "Caveats", "way", "reference.about", "Serializable", "object", "brand", "course", "serialization", "e.g", "everything"]
    }, {
        "type": "answer",
        "text": " comment this code /*if (savedinstancestate == null) {     getsupportfragmentmanager().begintransaction()             .add(r.id.container  new placeholderfragment())             .commit(); }*/  ",
        "tags": ["comment", "r.id.container", "code", ".commit", "placeholderfragment", "savedinstancestate", ".add", "==", "*/", "/*if", ".begintransaction", "getsupportfragmentmanager"]
    }, {
        "type": "question",
        "text": "in a class i can have as many constructors as i want with different argument types. i made all the constructors as private it didn't give any error because my implicit default constructor was public but when i declared my implicit default constructor as private then its showing an error while extending the class.  why?       this works fine         this can not be inherited public class demo4  {     private string name;     private int age;     private double sal;      private demo4(string name  int age) {         this.name=name;         this.age=age;        }      demo4(string name) {         this.name=name;     }      demo4() {         this(\"unknown\"  20);         this.sal=2000;     }      void show(){         system.out.println(\"name\"+name);         system.out.println(\"age: \"+age);     } }  public class demo4  {     private string name;     private int age;     private double sal;      private demo4(string name  int age) {         this.name=name;         this.age=age;     }      demo4(string name) {         this.name=name;     }      private demo4() {         this(\"unknown\"  20);         this.sal=2000;     }      void show() {         system.out.println(\"name\"+name);         system.out.println(\"age: \"+age);     } } ",
        "tags": ["int", "+name", "sal", "system.out.println", "default", "void", "this.sal=2000", "this.age=age", "constructor", "class", "name", "age", "error"]
    }]
}
res = []
for i in xrange(len(data["data"])):
  res.append(" ".join(data["data"][i]["tags"]))
print res

