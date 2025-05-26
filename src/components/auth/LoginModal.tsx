
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Lock, User, Shield } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: 'core' | 'admin') => void;
}

export const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'core' | 'admin'>('core');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login Successful",
          description: `Welcome! You've been authenticated as a ${selectedRole} user.`,
        });
        onLogin(selectedRole);
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const demoLogin = (role: 'core' | 'admin') => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Demo Login Successful",
        description: `Welcome to the demo! You're logged in as a ${role} user.`,
      });
      onLogin(role);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <DialogTitle>AI Material Selector</DialogTitle>
          </div>
          <DialogDescription>
            Sign in to access the AI-powered construction material selection platform
          </DialogDescription>
        </DialogHeader>

        <Tabs value={selectedRole} onValueChange={(value) => setSelectedRole(value as 'core' | 'admin')}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="core" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Core User</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="core">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Core User Access</CardTitle>
                <CardDescription>
                  Access AI recommendations, cost analysis, and material comparisons
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="admin">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-lg">Administrator Access</CardTitle>
                <CardDescription>
                  Full system control with add, update, and delete permissions
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing In...
                </>
              ) : (
                <>
                  <Lock className="mr-2 h-4 w-4" />
                  Sign In as {selectedRole === 'core' ? 'Core User' : 'Administrator'}
                </>
              )}
            </Button>
            
            <div className="text-center text-sm text-slate-500">or</div>
            
            <Button 
              type="button"
              variant="outline"
              onClick={() => demoLogin(selectedRole)}
              disabled={isLoading}
            >
              Try Demo as {selectedRole === 'core' ? 'Core User' : 'Administrator'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
