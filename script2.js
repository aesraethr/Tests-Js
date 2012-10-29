var dataForSelects = [
          {
            "attr": [
              {
                "attr": "Os Type" , "comparator": [ 
					  {
					    "comparator" : "=",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≠",
					    "valueDescriptor" : "inputNumber"
					  }
					]
              },
              {
                "attr": "Os Name" , "comparator": [ 
					  {
					    "comparator" : "=",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≠",
					    "valueDescriptor" : "inputNumber"
					  }
					]
              },
              {
                "attr": "Os Version" , "comparator": [ 
					  {
					    "comparator" : "Is defined",
					    "valueDescriptor" : "Null"
					  },
					  {
					    "comparator" : "Is not defined",
					    "valueDescriptor" : "Null"
					  },
					  {
					    "comparator" : "=",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≠",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "Regex",
					    "valueDescriptor" :"textPattern"
					  },
					  {
					    "comparator" : "<",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : ">",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≤",
					    "valueDescriptor" : "inputNumber"
					  },
					  {
					    "comparator" : "≥",
					    "valueDescriptor" : "inputNumber"
					  },
					]
              }
            ],
            "type": "Node Summary"
          },
          {
            "attr": [
              {
                "attr": "Machine ID" , "comparator": "="
              },
              {
                "attr": "Name" , "comparator": "="
              },
              {
                "attr": "Description" , "comparator": "="
              }
            ],
            "type": "Hardware"
          },
          {
            "attr": [
              {
                "attr": "Name" , "comparator": "="
              },
              {
                "attr": "Description" , "comparator": "="
              },
              {
                "attr": "Version" , "comparator": "="
              },
              {
                "attr": "Release Date" , "comparator": "="
              },
              {
                "attr": "Editor" , "comparator": "="
              }
            ],
            "type": "Software"
          }
        ];
