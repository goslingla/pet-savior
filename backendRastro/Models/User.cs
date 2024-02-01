using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backendRastro
{
public class User
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Address { get; set; }
    public bool WannaAdopt { get; set; }

    // Construtor da classe User
    public User(string name, int age, string address, bool wannaAdopt)
    {
        Name = name;
        Age = age;
        Address = address;
        WannaAdopt = wannaAdopt;
    }
}
}