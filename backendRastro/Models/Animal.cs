using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backendRastro.Models
{

public abstract class Pet
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Address { get; set; }
    public bool ForAdoption { get; set; }
    public bool Lost { get; set; }

    // Construtor da classe Animal
    public Pet(string name, int age, string address, bool forAdoption, bool lost)
    {
        Name = name;
        Age = age;
        Address = address;
        ForAdoption = forAdoption;
        Lost = lost;
    }

    // Método abstrato que será implementado pelas classes filhas
    public abstract void MakeSound();
}
}