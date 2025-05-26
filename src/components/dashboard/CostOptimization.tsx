
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calculator, TrendingDown, DollarSign, Target, PieChart, BarChart3 } from 'lucide-react';

interface CostOptimizationProps {
  userRole: 'core' | 'admin';
}

export const CostOptimization = ({ userRole }: CostOptimizationProps) => {
  const [showOptimization, setShowOptimization] = useState(true);

  const optimizationData = {
    totalBudget: 850000,
    optimizedBudget: 720000,
    savings: 130000,
    savingsPercentage: 15.3,
    categories: [
      {
        name: "Structural Materials",
        original: 350000,
        optimized: 295000,
        savings: 55000,
        percentage: 15.7
      },
      {
        name: "Finishing Materials",
        original: 280000,
        optimized: 245000,
        savings: 35000,
        percentage: 12.5
      },
      {
        name: "Insulation & Waterproofing",
        original: 120000,
        optimized: 105000,
        savings: 15000,
        percentage: 12.5
      },
      {
        name: "Hardware & Fixtures",
        original: 100000,
        optimized: 75000,
        savings: 25000,
        percentage: 25.0
      }
    ]
  };

  const recommendations = [
    {
      category: "Steel Reinforcement",
      currentCost: "$2,450/ton",
      optimizedCost: "$2,100/ton",
      alternative: "High-grade steel with bulk procurement discount",
      savings: "$350/ton",
      impact: "No performance compromise"
    },
    {
      category: "Concrete Mix",
      currentCost: "$220/m³",
      optimizedCost: "$180/m³",
      alternative: "Locally sourced aggregates with recycled content",
      savings: "$40/m³",
      impact: "Enhanced sustainability rating"
    },
    {
      category: "Roofing Materials",
      currentCost: "$85/m²",
      optimizedCost: "$65/m²",
      alternative: "Composite materials with 20-year warranty",
      savings: "$20/m²",
      impact: "Extended durability guarantee"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Optimization Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="h-5 w-5" />
            <span>Cost Optimization Analysis</span>
          </CardTitle>
          <CardDescription>
            AI-powered cost analysis with optimization recommendations for your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                ${optimizationData.totalBudget.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500">Original Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${optimizationData.optimizedBudget.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500">Optimized Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                ${optimizationData.savings.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500">Total Savings ({optimizationData.savingsPercentage}%)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PieChart className="h-5 w-5" />
            <span>Category-wise Optimization</span>
          </CardTitle>
          <CardDescription>
            Detailed breakdown of cost savings by material category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optimizationData.categories.map((category, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-900">{category.name}</h3>
                  <Badge className="bg-green-100 text-green-700">
                    -{category.percentage}%
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500">Original</div>
                    <div className="font-medium">${category.original.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Optimized</div>
                    <div className="font-medium text-green-600">${category.optimized.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Savings</div>
                    <div className="font-medium text-orange-600">${category.savings.toLocaleString()}</div>
                  </div>
                </div>
                <Progress value={category.percentage} className="mt-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optimization Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>AI Optimization Recommendations</span>
          </CardTitle>
          <CardDescription>
            Specific material alternatives that maintain quality while reducing costs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{rec.category}</h3>
                    <p className="text-sm text-slate-600 mt-1">{rec.alternative}</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700">
                    Save {rec.savings}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="bg-white rounded p-3">
                    <div className="text-xs text-slate-500 mb-1">Current Cost</div>
                    <div className="font-semibold text-slate-900">{rec.currentCost}</div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <div className="text-xs text-slate-500 mb-1">Optimized Cost</div>
                    <div className="font-semibold text-green-600">{rec.optimizedCost}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">
                    <TrendingDown className="h-4 w-4 inline mr-1" />
                    {rec.impact}
                  </div>
                  <Button size="sm" variant="outline">
                    Apply Recommendation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
          <DollarSign className="mr-2 h-4 w-4" />
          Apply All Optimizations
        </Button>
        <Button variant="outline">
          <BarChart3 className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
      </div>
    </div>
  );
};
