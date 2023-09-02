class Stu
{
    int id=100;
    String name="aarya";
    void show()
    {
        System.out.println("id number "+id);
        System.out.println("name "+name);
    }

}
class Student
{
    public static void main(String[] args)
    {
        Stu s = new Stu();
        s.show();
    }
}