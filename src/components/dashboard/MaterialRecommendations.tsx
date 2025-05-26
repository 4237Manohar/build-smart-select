
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Brain, Search, Filter, TrendingUp, DollarSign, Leaf, Clock } from 'lucide-react';

interface MaterialRecommendationsProps {
  userRole: 'core' | 'admin';
}

export const MaterialRecommendations = ({ userRole }: MaterialRecommendationsProps) => {
  const [projectType, setProjectType] = useState('');
  const [budget, setBudget] = useState('');
  const [durability, setDurability] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleAnalyze = () => {
    setShowRecommendations(true);
  };

  const recommendations = [
    {
      id: 1,
      name: "High-Performance Steel Reinforcement",
      type: "Structural Steel",
      cost: "$2,450/ton",
      durability: 95,
      sustainability: 78,
      performance: 92,
      description: "Premium grade steel with enhanced corrosion resistance and superior tensile strength.",
      features: ["Corrosion Resistant", "High Tensile Strength", "Weather Resistant"],
      aiConfidence: 94
    },
    {
      id: 2,
      name: "Eco-Friendly Concrete Mix",
      type: "Concrete",
      cost: "$180/m³",
      durability: 88,
      sustainability: 95,
      performance: 85,
      description: "Sustainable concrete mix with recycled aggregates and reduced carbon footprint.",
      features: ["Recycled Content", "Low Carbon", "High Compression"],
      aiConfidence: 89
    },
    {
      id: 3,
      name: "Composite Fiber Panels",
      type: "Cladding",
      cost: "$95/m²",
      durability: 82,
      sustainability: 71,
      performance: 88,
      description: "Lightweight composite panels with excellent thermal properties and modern aesthetics.",
      features: ["Lightweight", "Thermal Efficient", "Modern Design"],
      aiConfidence: 87
    }
  ];

  return (
    <div className="space-y-6">
      {/* Analysis Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5" />
            <span>AI Material Analysis</span>
          </CardTitle>
          <CardDescription>
            Input your project requirements for AI-powered material recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="project-type">Project Type</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Building</SelectItem>
                  <SelectItem value="commercial">Commercial Complex</SelectItem>
                  <SelectItem value="infrastructure">Infrastructure</SelectItem>
                  <SelectItem value="industrial">Industrial Facility</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">$50K - $200K</SelectItem>
                  <SelectItem value="medium">$200K - $500K</SelectItem>
                  <SelectItem value="high">$500K - $1M</SelectItem>
                  <SelectItem value="premium">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="durability">Durability Requirements</Label>
              <Select value={durability} onValueChange={setDurability}>
                <SelectTrigger>
                  <SelectValue placeholder="Select durability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (10-15 years)</SelectItem>
                  <SelectItem value="enhanced">Enhanced (15-25 years)</SelectItem>
                  <SelectItem value="premium">Premium (25+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="environment">Environment</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urban">Urban</SelectItem>
                  <SelectItem value="coastal">Coastal</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="rural">Rural</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleAnalyze}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 px-8"
            >
              <Brain className="mr-2 h-4 w-4" />
              Analyze with AI
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      {showRecommendations && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">AI Recommendations</h2>
            <Badge className="bg-green-100 text-green-700">
              Analysis Complete
            </Badge>
          </div>
          
          {recommendations.map((material) => (
            <Card key={material.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{material.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">{material.type}</Badge>
                      <span className="text-sm text-slate-500">•</span>
                      <span className="text-sm text-slate-500">AI Confidence: {material.aiConfidence}%</span>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900">{material.cost}</div>
                    <div className="text-sm text-slate-500">Estimated Cost</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{material.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-600">Durability</span>
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${material.durability}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{material.durability}%</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-600">Sustainability</span>
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${material.sustainability}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{material.sustainability}%</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-slate-600">Performance</span>
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full" 
                        style={{ width: `${material.performance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{material.performance}%</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {material.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">{feature}</Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Get Detailed Quote
                  </Button>
                  <Button variant="outline">
                    Compare Materials
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
