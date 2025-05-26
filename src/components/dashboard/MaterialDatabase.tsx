
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit2, Trash2, Search, Database, Filter } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const MaterialDatabase = () => {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: "High-Performance Steel Reinforcement",
      category: "Steel",
      cost: 2450,
      durability: 95,
      sustainability: 78,
      description: "Premium grade steel with enhanced corrosion resistance",
      supplier: "SteelTech Industries",
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      name: "Eco-Friendly Concrete Mix",
      category: "Concrete",
      cost: 180,
      durability: 88,
      sustainability: 95,
      description: "Sustainable concrete mix with recycled aggregates",
      supplier: "GreenBuild Materials",
      lastUpdated: "2024-01-14"
    },
    {
      id: 3,
      name: "Composite Fiber Panels",
      category: "Cladding",
      cost: 95,
      durability: 82,
      sustainability: 71,
      description: "Lightweight composite panels with excellent thermal properties",
      supplier: "FiberTech Solutions",
      lastUpdated: "2024-01-13"
    }
  ]);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const [newMaterial, setNewMaterial] = useState({
    name: '',
    category: '',
    cost: '',
    durability: '',
    sustainability: '',
    description: '',
    supplier: ''
  });

  const handleAddMaterial = () => {
    if (!newMaterial.name || !newMaterial.category || !newMaterial.cost) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const material = {
      id: materials.length + 1,
      ...newMaterial,
      cost: parseFloat(newMaterial.cost),
      durability: parseInt(newMaterial.durability) || 0,
      sustainability: parseInt(newMaterial.sustainability) || 0,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    setMaterials([...materials, material]);
    setNewMaterial({
      name: '',
      category: '',
      cost: '',
      durability: '',
      sustainability: '',
      description: '',
      supplier: ''
    });
    setShowAddDialog(false);
    
    toast({
      title: "Material Added",
      description: "New material has been successfully added to the database.",
    });
  };

  const handleDeleteMaterial = (id: number) => {
    setMaterials(materials.filter(m => m.id !== id));
    toast({
      title: "Material Deleted",
      description: "Material has been removed from the database.",
    });
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || material.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>Material Database Management</span>
          </CardTitle>
          <CardDescription>
            Add, update, and manage construction materials in the database
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search materials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="steel">Steel</SelectItem>
                <SelectItem value="concrete">Concrete</SelectItem>
                <SelectItem value="cladding">Cladding</SelectItem>
                <SelectItem value="insulation">Insulation</SelectItem>
              </SelectContent>
            </Select>
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Material
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Material</DialogTitle>
                  <DialogDescription>
                    Add a new construction material to the database
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Material Name *</Label>
                    <Input
                      id="name"
                      value={newMaterial.name}
                      onChange={(e) => setNewMaterial({...newMaterial, name: e.target.value})}
                      placeholder="Enter material name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={newMaterial.category} onValueChange={(value) => setNewMaterial({...newMaterial, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Steel">Steel</SelectItem>
                        <SelectItem value="Concrete">Concrete</SelectItem>
                        <SelectItem value="Cladding">Cladding</SelectItem>
                        <SelectItem value="Insulation">Insulation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cost">Cost ($/unit) *</Label>
                      <Input
                        id="cost"
                        type="number"
                        value={newMaterial.cost}
                        onChange={(e) => setNewMaterial({...newMaterial, cost: e.target.value})}
                        placeholder="0.00"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="durability">Durability (%)</Label>
                      <Input
                        id="durability"
                        type="number"
                        min="0"
                        max="100"
                        value={newMaterial.durability}
                        onChange={(e) => setNewMaterial({...newMaterial, durability: e.target.value})}
                        placeholder="85"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sustainability">Sustainability Score (%)</Label>
                    <Input
                      id="sustainability"
                      type="number"
                      min="0"
                      max="100"
                      value={newMaterial.sustainability}
                      onChange={(e) => setNewMaterial({...newMaterial, sustainability: e.target.value})}
                      placeholder="75"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Supplier</Label>
                    <Input
                      id="supplier"
                      value={newMaterial.supplier}
                      onChange={(e) => setNewMaterial({...newMaterial, supplier: e.target.value})}
                      placeholder="Supplier name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={newMaterial.description}
                      onChange={(e) => setNewMaterial({...newMaterial, description: e.target.value})}
                      placeholder="Material description and properties"
                      rows={3}
                    />
                  </div>
                  <Button onClick={handleAddMaterial} className="w-full">
                    Add Material
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Materials List */}
      <div className="grid gap-4">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{material.name}</h3>
                    <Badge variant="outline">{material.category}</Badge>
                  </div>
                  <p className="text-slate-600 mb-3">{material.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">Cost</div>
                      <div className="font-medium">${material.cost}/unit</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Durability</div>
                      <div className="font-medium">{material.durability}%</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Sustainability</div>
                      <div className="font-medium">{material.sustainability}%</div>
                    </div>
                    <div>
                      <div className="text-slate-500">Last Updated</div>
                      <div className="font-medium">{material.lastUpdated}</div>
                    </div>
                  </div>
                  
                  {material.supplier && (
                    <div className="mt-2 text-sm text-slate-500">
                      Supplier: {material.supplier}
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => handleDeleteMaterial(material.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Database className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No materials found</h3>
            <p className="text-slate-600 mb-4">
              {searchTerm || categoryFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Get started by adding your first material to the database.'}
            </p>
            {!searchTerm && categoryFilter === 'all' && (
              <Button onClick={() => setShowAddDialog(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add First Material
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
