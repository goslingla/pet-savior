using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backendRastro.Models
{
public class Cat : Pet
{
    public string Color { get; set; }

    // Construtor da classe Cat
    public Cat(string name, int age, string address, bool forAdoption, bool lost, string color)
        : base(name, age, address, forAdoption, lost)
    {
        Color = color;
    }

    // Implementação do método abstrato MakeSound
    public override void MakeSound()
    {
        Console.WriteLine("Meow! Meow!");
    }
}
}