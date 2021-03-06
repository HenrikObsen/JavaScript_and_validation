﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JavaScript_and_validation.Models
{
    public class Kunde
    {
        public int ID { get; set; }

        [Required]
        [StringLength(150)]
        public string Name { get; set; }

        [Required]
        [StringLength(150)]
        public string Adress { get; set; }

        [Required]
        [StringLength(150)]
        public string City { get; set; }

        [Required]
        [Range(0, 9999)]
        public int ZipCode { get; set; }

        [Required]
        [RegularExpression(@"[0-9]*\.?[0-9]+")]
        public string Phone { get; set; }

        [Required]
        [RegularExpression(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$", ErrorMessage = "Please enter a valid email")]
        public string Email { get; set; }

    }
}
// [RegularExpression(".+\\@.+\\..+", ErrorMessage = "Please enter a valid email")]
// [DisplayName("Opdateret")]
// [Range(0, 9999)]
//http://regexlib.com/DisplayPatterns.aspx