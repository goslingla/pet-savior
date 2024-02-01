using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backendRastro.Models
{

public class Dog : Pet
{
    public string Breed { get; set; }

    // Construtor da classe Dog
    public Dog(string name, int age, string address, bool forAdoption, bool lost, string breed)
        : base(name, age, address, forAdoption, lost)
    {
        Breed = breed;
    }

    // Implementação do método abstrato MakeSound
    public override void MakeSound()
    {
        Console.WriteLine("Woof! Woof!");
    }
}
}